#!/bin/bash
set -e

for co in `find . -not -name '*.json.co' -name '*.co'`; do
    name="`basename -s .co "$co"`"
    echo "$co --> ${name}.js, ${name}.min.js"
    coco --compile "$co"
    uglifyjs -o "${name}.min.js" "${name}.js"
done

coco --json --compile package.json.co
cat package.json | sed -E 's!("main": *"./[^"]+)!\1.js!g' > bower.json
cp bower.json component.json

