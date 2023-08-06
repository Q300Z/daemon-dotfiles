#!/bin/bash

# Chemins d'accès des images à utiliser
WALLPAPER_PATH="$HOME/Documents/GITHUB/daemon-dotfiles/wallpapers/CyberWallLaptop3.png"
ICON_PATH="$HOME/Documents/GITHUB/daemon-dotfiles/icons/Daemon_Logo.png"

# Gestionnaire de paquets par défaut
PACKAGE_MANAGER=""

# Codes de couleurs pour les messages
CDEF=" \033[0m"
CCIN=" \033[0;36m"
CGSC=" \033[0;32m"
CRER=" \033[0;31m"
CWAR=" \033[0;33m"
b_CDEF=" \033[1;37m"
b_CCIN=" \033[1;36m"
b_CGSC=" \033[1;32m"
b_CRER=" \033[1;31m"
b_CWAR=" \033[1;33m"

# Fonction pour afficher des messages colorés
prompt () {
  case ${1} in
    "-s"|"--success")
      echo -e "${b_CGSC}${@/-s/}${CDEF}";;
    "-e"|"--error")
      echo -e "${b_CRER}${@/-e/}${CDEF}";;
    "-w"|"--warning")
      echo -e "${b_CWAR}${@/-w/}${CDEF}";;
    "-i"|"--info")
      echo -e "${b_CCIN}${@/-i/}${CDEF}";;
    *)
    echo -e "$@"
    ;;
  esac
}

# Vérification des gestionnaires de paquets disponibles
if [ -x "$(command -v apt-get)" ]; then
  PACKAGE_MANAGER="apt-get"
elif [ -x "$(command -v dnf)" ]; then
  PACKAGE_MANAGER="dnf"
elif [ -x "$(command -v yum)" ]; then
  PACKAGE_MANAGER="yum"
elif [ -x "$(command -v pacman)" ]; then
  PACKAGE_MANAGER="pacman"
fi

check_and_copy_directory() {
  prompt -i "Installation du $1"
  if [ -d "$1" ]; then
    mkdir -p "$3" 
  fi
  cp -rT "$1" "$3"
  prompt -s "Répertoire $1 copié avec succès."
}

# Fonction pour vérifier et installer des polices
check_and_install_fonts() {
  if [ -d "$1" ]; then
    prompt -i "Installation des polices"
    mkdir -p ~/.fonts
    cp -r "$1"/* ~/.fonts/
    prompt -s "Polices installées avec succès."
  else
    prompt -w "Le répertoire des polices n'existe pas. Aucune police installée."
  fi
}

# Fonction pour générer une règle KWin
generate_kwin_rule() {
  local rule_file="$1"
  
  if [ -f "$rule_file" ]; then
    rule_name=$(basename "$rule_file" .kwinrule)
    
    # Vérifier si la règle existe déjà
    existing_rule=$(kreadconfig5 --file ~/.config/kwinrulesrc --group "$rule_name" --key match)
    if [ -n "$existing_rule" ]; then
      prompt -i "La règle KWin '$rule_name' existe déjà. Aucune action nécessaire."
      return
    fi
    
    while IFS='=' read -r key value; do
      key=$(echo "$key" | tr -d '[:space:]')
      value=$(echo "$value" | tr -d '[:space:]')
      
      kwriteconfig5 --file ~/.config/kwinrulesrc --group $rule_name --key $key "$value"
    done < "$rule_file"
    
    prompt -s "Règle KWin '$rule_name' générée avec succès."
    
    rule_count=$(kreadconfig5 --file ~/.config/kwinrulesrc --group General --key count)
    rule_list=$(kreadconfig5 --file ~/.config/kwinrulesrc --group General --key rules)
    if [ -z "$rule_count" ]; then
      rule_count=0
      rule_list=""
    fi
    rule_count=$((rule_count + 1))
    rule_list="$rule_list,$rule_name"
    kwriteconfig5 --file ~/.config/kwinrulesrc --group General --key count "$rule_count"
    kwriteconfig5 --file ~/.config/kwinrulesrc --group General --key rules "$rule_list"
  else
    prompt -e "Le fichier '$rule_file' n'existe pas. Aucune règle générée."
  fi
}

# Début de l'installation
prompt -i "Début de l'installation du Thème Daemon"

# Installation des éléments KDE
check_and_copy_directory plasma-styles/. "Thème Plasma Desktop" ~/.local/share/plasma/desktoptheme/
check_and_copy_directory colors/. "Schémas de couleurs" ~/.local/share/color-schemes/
check_and_copy_directory window-borders/. "Thèmes Aurorae" ~/.local/share/aurorae/themes/
check_and_copy_directory icons/. "Pack Icônes" ~/.local/share/icons/
check_and_copy_directory splash-screen/. "Écran de démarrage" ~/.local/share/plasma/look-and-feel/
check_and_install_fonts fonts/.
check_and_copy_directory cursor/. "Cursor Personaliser" ~/.icons/

# Installation du Global thème
read -p "Quelle version voulez-vous : Desktop | Portable ? (1/2) " install_choice
if [ "$install_choice" = "1" ]; then
  version="Daemon_Desktop"
elif [ "$install_choice" = "2" ]; then
  version="Daemon_Laptop"
fi

js_file_original="global-theme/$version/contents/layouts/DONT_TOUCH_org.kde.plasma.desktop-layout.js"
js_file="global-theme/$version/contents/layouts/org.kde.plasma.desktop-layout.js"

if [ -f "$js_file_original" ]; then
  cp -T "$js_file_original" "$js_file" 
  sed -i "s|CHANGE_ME_WALLPAPER|"file://$WALLPAPER_PATH"|g" "$js_file"
  sed -i "s|CHANGE_ME_ICON|"file://$ICON_PATH"|g" "$js_file"
  check_and_copy_directory global-theme/$version "Thème Global Deamon" ~/.local/share/plasma/look-and-feel/$version
  rm $js_file
else
  prompt -e "Echec de l'installation du Thème Global KDE car $js_file_original n'est pas présent."
fi



# Installation du Script Kwin FlexGrid
read -p "Voulez-vous installer le Script Kwin FlexGrid ? (o/N) " install_choice
if [ "$install_choice" = "o" ]; then
    check_and_copy_directory kwin-scripts/flexGrid/ "Script Kwin FlexGrid" ~/.local/share/kwin/scripts/flexGrid/
fi

# Installation des Kwin Rule
generate_kwin_rule kwin-rules/force_maximum_size.kwinrule

# Installation des théme custom d'application tiers
#check_and_copy_directory discord/. "Thème/plugins DiscordBetter" ~/.config/BetterDiscord/
#check_and_copy_directory libreoffice-icons/. "Pack d'icon LibreOffice" /usr/lib/libreoffice/share/config/
#check_and_copy_directory konsole-colors/ "Thème Konsole" /usr/share/konsole/.


# Installation de Kvantum
if ! command -v kvantummanager &> /dev/null; then
  prompt -w "Kvantum n'est pas installé."
  read -p "Voulez-vous installer Kvantum ? (o/N) " install_choice
  if [ "$install_choice" = "o" ]; then
    prompt -i "Les droits administrateur sont requis pour effectuer l'installation :"
    case "$PACKAGE_MANAGER" in
      apt-get)
        sudo $PACKAGE_MANAGER install kvantum
        ;;
      dnf|yum)
        sudo $PACKAGE_MANAGER install kvantum
        ;;
      pacman)
        sudo $PACKAGE_MANAGER -S kvantum
        ;;
      *)
        prompt -e "Gestionnaire de paquets non pris en charge. Veuillez installer Kvantum manuellement."
        ;;
    esac
    check_and_copy_directory kvantum-themes/. "Thème Kvantum" ~/.config/Kvantum/
  fi
else
  prompt -i "Installation du thème Kvantum"
  check_and_copy_directory kvantum-themes/. "Thème Kvantum" ~/.config/Kvantum/
fi


# Installation du thème grub
read -p "Voulez-vous installer le thème grub ? (o/N) " install_choice
if [ "$install_choice" = "o" ]; then
    prompt -i "Installation en cours ..."
    prompt -i "Les droits administrateur sont requis pour effectuer l'installation :"
    sudo CyberRe_1.0.0/install.sh
fi

# Fin de l'installation
prompt -s "L'installation du thème KDE a été effectuée avec succès."
