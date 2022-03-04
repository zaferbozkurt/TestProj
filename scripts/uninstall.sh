#!/bin/sh

FOLDER_PATH=$(pwd)
GO_TO_MAIN_PATH="cd '$FOLDER_PATH'"

isDeleteGitChanges="$1"

FN_cleanAndroid() {
    rm -rf "./android/.gradle"

    printf "\nAndroid .gradle deleted\n"

    rm -rf "./android/.idea"

    printf "\nAndroid .idea deleted\n"

    rm -rf "./android/build"

    printf "\nAndroid build deleted\n"

    rm -rf "./android/app/build"

    printf "\nAndroid app/build deleted\n"
}

FN_cleanIos() {
    rm -rf "./ios/Pods"

    printf "\niOS Pods folder deleted\n"

    rm -rf "./ios/build"

    printf "\niOS build folder deleted\n"
}

FN_cleanShared() {
    rm -rf "./node_modules"

    printf "\nnode_modules deleted\n"

    rm -rf "./exports"

    printf "\nexports deleted\n"

}

FN_gitDiscardChanges() {
    git reset
    git checkout .
    git clean -fdx
}

FN_cleanBoth() {
    FN_cleanShared
    FN_cleanAndroid
    FN_cleanIos

    if [ '-g' == "$isDeleteGitChanges" ]; then
        FN_gitDiscardChanges
    fi

}

FN_cleanBoth
