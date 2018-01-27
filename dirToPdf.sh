#!/bin/bash

inputDir=$1
basePath=`dirname $inputDir`
outputName=`basename $inputDir`

array=( $( ls $inputDir ) )

cd $inputDir && convert "${array[@]}" $basePath/$outputName.pdf
