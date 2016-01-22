#!/bin/sh
set -e

if ! [ -e scripts/bump-version.sh ]; then
  echo >&2 "Please run scripts/bump-version.sh from the repo root"
  exit 1
fi

update_version() {
  file="./packages/${1}/package.json"
  echo "$(node -p "p=require('${file}');p.version='${2}';JSON.stringify(p,null,2)")" > $file
  echo "Updated ${1} version to ${2}"
}

read -p "Version: " version

for f in packages/*; do
  package=`basename $f`

  if [ -d "$f" ]; then
    update_version $package $version
  fi
done
