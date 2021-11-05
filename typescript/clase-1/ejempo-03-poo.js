//programacion orientada a objetos
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ReproductorGenerico = /** @class */ (function () {
    function ReproductorGenerico(modelo) {
        this.modelo = modelo;
    }
    ReproductorGenerico.prototype.play = function () {
        console.log(this.modelo + " Play");
    };
    ReproductorGenerico.prototype.stop = function () {
        console.log(this.modelo + " Stop");
    };
    ReproductorGenerico.prototype.pause = function () {
        console.log(this.modelo + " Pause");
    };
    return ReproductorGenerico;
}());
var ReproductorMusica = /** @class */ (function (_super) {
    __extends(ReproductorMusica, _super);
    function ReproductorMusica(modelo, cancion) {
        var _this = _super.call(this, modelo) || this;
        _this.cancion = cancion;
        return _this;
    }
    return ReproductorMusica;
}(ReproductorGenerico));
var Radio = /** @class */ (function (_super) {
    __extends(Radio, _super);
    function Radio(_modelo, cancion, canal) {
        var _this = _super.call(this, _modelo, cancion) || this;
        _this.canal = canal;
        return _this;
    }
    return Radio;
}(ReproductorMusica));
var ReproductorVideo = /** @class */ (function (_super) {
    __extends(ReproductorVideo, _super);
    function ReproductorVideo(modelo, video) {
        var _this = _super.call(this, modelo) || this;
        _this.video = video;
        return _this;
    }
    ReproductorVideo.prototype.mostrarVideo = function () {
        console.log("Reproduciendo " + this.video);
    };
    return ReproductorVideo;
}(ReproductorGenerico));
var repMusic = new ReproductorMusica("Reproductor.MP3", "wlcome to the jungle");
repMusic.play();
var video = new ReproductorVideo("vlc", "historias raras");
video.mostrarVideo();
