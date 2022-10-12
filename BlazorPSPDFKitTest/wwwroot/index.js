import "./assets/pspdfkit.js";

// We need to inform PSPDFKit where to look for its library assets, i.e. the location of the `pspdfkit-lib` directory.
const baseUrl = `${window.location.protocol}//${window.location.host}/assets/`;

let i = null;
let i2 = null;

PSPDFKit.load({
    baseUrl,
    container: "#container",
    document: "./example.pdf"
}).then((instance) => {
    i = instance;
    console.log("PSPDFKit loaded!");
});

document.getElementById ("btnreload").addEventListener ("click", reload, false);

function reload() {
    if (i) {
        PSPDFKit.unload(i);

        i = null;
        PSPDFKit.load({
            baseUrl,
            container: "#container",
            document: "./example2.pdf"
        }).then((instance) => {
            i2 = instance;
            console.log("PSPDFKit loaded!");
        });
    } else {
        console.log(i);
        PSPDFKit.unload(i2);

        PSPDFKit.load({
            baseUrl,
            container: "#container",
            document: "./example.pdf"
        }).then((instance) => {
            i = instance;
            console.log("PSPDFKit loaded!");
        });
        i2 = null;
    }
}

