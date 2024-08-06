// index.js

const intemplateanimations = function intemplateanimations(name, frames, source) {
    const gr = res.getTexture(source);
    if (!gr) {
        //console.error('[animations] Graphic asset does not exist: ' + source);
        return false;
    }
    if (res.textures[name]) {
        //console.warn('[animations] Graphic asset with this name already exists: ' + name);
        return false;
    }
    var spr = frames.map(function mapSpriteFrames(id) {
        if (gr[id]) {
            return gr[id];
        }
        //console.error(`[animations] Frame #${id} does not exist in the asset ${source}`);
        return gr[0];
    });
    spr.shape = gr.shape;
    res.textures[name] = spr;
    return true;
};
window.intemplateanimations = intemplateanimations;

