#!/bin/sh
BLOG_PATH=`dirname $0`
cd $BLOG_PATH
git pull
rm docs/* -rf
cd ../ziqiangxu.github.io/
npm run docs:build
cd -
cp -r ../ziqiangxu.github.io/docs/.vuepress/dist/* docs/
git add docs/
git commit -m "Update posts"
git push
