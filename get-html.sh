#!/bin/sh
rm docs/* -rf
mv ../ziqiangxu.github.io/docs/.vuepress/dist/* docs/
git add docs/
git commit -m "Update posts"
