#!/bin/sh
set -e

if ! [ -e scripts/publish.sh ]; then
  echo >&2 "Please run scripts/publish.sh from the repo root"
  exit 1
fi

for f in packages/*; do
  package=`basename $f`

  if [ -d "$f" ]; then
    npm publish ./packages/$package
  fi
done

npm publish
