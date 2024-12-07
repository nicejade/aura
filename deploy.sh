#!/usr/bin/env sh

set -e

npm run build

cd ./dist

rm js/*.map

echo 'thebettersites.com' > CNAME

git init
git add -A
git commit -m '🎉 local build for deploy'

git push -f git@github.com:nicejade/thebettersites.com.git main:gh-pages