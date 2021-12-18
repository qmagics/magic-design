const { series, src, dest } = require("gulp");
const sass = require("gulp-dart-sass");
const autoprefixer = require("gulp-autoprefixer");
const cssmin = require("gulp-cssmin");
const path = require("path");
const { ThemeChalkPath } = require("../../build/paths");

function compile() {
    return src("./src/*.scss")
        .pipe(sass.sync())
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(dest(ThemeChalkPath))
}

function copyFont() {
    return src("./src/fonts/**").pipe(cssmin()).pipe(dest(path.join(ThemeChalkPath, "fonts")));
}

exports.build = series(compile, copyFont);