#!/usr/bin/env sh

set -e

npm run build

cd ./dist

rm js/*.map

echo 'lovejade.cn' > CNAME

git init
git add -A
git commit -m '🎉 local build for deploy'

git push -f git@github.com:nicejade/lovejade.cn.git main:gh-pages