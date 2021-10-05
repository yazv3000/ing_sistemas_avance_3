THREE.OBJLoader = function(e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
}, THREE.OBJLoader.prototype = {
    constructor: THREE.OBJLoader,
    load: function(e, s, t, r) {
        var a = this,
            n = new THREE.XHRLoader(a.manager);
        n.setCrossOrigin(this.crossOrigin), n.load(e, function(e) {
            s(a.parse(e))
        })
    },
    parse: function(e) {
        function s(e, s, t) {
            return new THREE.Vector3(e, s, t)
        }

        function t(e, s, t, r) {
            return new THREE.Face3(e, s, t, r)
        }
        var r, a, n = new THREE.Object3D;
        !1 === /^o /gm.test(e) && (w = new THREE.Geometry, r = new THREE.MeshLambertMaterial, a = new THREE.Mesh(w, r), n.add(a));
        for (var p, I, d = [], u = 0, c = [], o = [], h = /v( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/, i = /vn( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/, l = /vt( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/, f = /f( +\d+)( +\d+)( +\d+)( +\d+)?/, E = /f( +(\d+)\/(\d+))( +(\d+)\/(\d+))( +(\d+)\/(\d+))( +(\d+)\/(\d+))?/, v = /f( +(\d+)\/(\d+)\/(\d+))( +(\d+)\/(\d+)\/(\d+))( +(\d+)\/(\d+)\/(\d+))( +(\d+)\/(\d+)\/(\d+))?/, m = /f( +(\d+)\/\/(\d+))( +(\d+)\/\/(\d+))( +(\d+)\/\/(\d+))( +(\d+)\/\/(\d+))?/, H = e.split("\n"), R = 0; R < H.length; R++) {
            var g, T = H[R];
            0 !== (T = T.trim()).length && "#" !== T.charAt(0) && (null !== (g = h.exec(T)) ? d.push(s(parseFloat(g[1]), parseFloat(g[2]), parseFloat(g[3]))) : null !== (g = i.exec(T)) ? c.push(s(parseFloat(g[1]), parseFloat(g[2]), parseFloat(g[3]))) : null !== (g = l.exec(T)) ? o.push((p = parseFloat(g[1]), I = parseFloat(g[2]), new THREE.Vector2(p, I))) : null !== (g = f.exec(T)) ? void 0 === g[4] ? (w.vertices.push(d[parseInt(g[1]) - 1], d[parseInt(g[2]) - 1], d[parseInt(g[3]) - 1]), w.faces.push(t(u++, u++, u++))) : (w.vertices.push(d[parseInt(g[1]) - 1], d[parseInt(g[2]) - 1], d[parseInt(g[3]) - 1], d[parseInt(g[4]) - 1]), w.faces.push(t(u, u + 1, u + 3)), w.faces.push(t(u + 1, u + 2, u + 3)), u += 4) : null !== (g = E.exec(T)) ? void 0 === g[10] ? (w.vertices.push(d[parseInt(g[2]) - 1], d[parseInt(g[5]) - 1], d[parseInt(g[8]) - 1]), w.faces.push(t(u++, u++, u++)), w.faceVertexUvs[0].push([o[parseInt(g[3]) - 1], o[parseInt(g[6]) - 1], o[parseInt(g[9]) - 1]])) : (w.vertices.push(d[parseInt(g[2]) - 1], d[parseInt(g[5]) - 1], d[parseInt(g[8]) - 1], d[parseInt(g[11]) - 1]), w.faces.push(t(u, u + 1, u + 3)), w.faceVertexUvs[0].push([o[parseInt(g[3]) - 1], o[parseInt(g[6]) - 1], o[parseInt(g[12]) - 1]]), w.faces.push(t(u + 1, u + 2, u + 3)), w.faceVertexUvs[0].push([o[parseInt(g[6]) - 1], o[parseInt(g[9]) - 1], o[parseInt(g[12]) - 1]]), u += 4) : null !== (g = v.exec(T)) ? void 0 === g[13] ? (w.vertices.push(d[parseInt(g[2]) - 1], d[parseInt(g[6]) - 1], d[parseInt(g[10]) - 1]), w.faces.push(t(u++, u++, u++, [c[parseInt(g[4]) - 1], c[parseInt(g[8]) - 1], c[parseInt(g[12]) - 1]])), w.faceVertexUvs[0].push([o[parseInt(g[3]) - 1], o[parseInt(g[7]) - 1], o[parseInt(g[11]) - 1]])) : (w.vertices.push(d[parseInt(g[2]) - 1], d[parseInt(g[6]) - 1], d[parseInt(g[10]) - 1], d[parseInt(g[14]) - 1]), w.faces.push(t(u, u + 1, u + 3, [c[parseInt(g[4]) - 1], c[parseInt(g[8]) - 1], c[parseInt(g[16]) - 1]])), w.faceVertexUvs[0].push([o[parseInt(g[3]) - 1], o[parseInt(g[7]) - 1], o[parseInt(g[15]) - 1]]), w.faces.push(t(u + 1, u + 2, u + 3, [c[parseInt(g[8]) - 1], c[parseInt(g[12]) - 1], c[parseInt(g[16]) - 1]])), w.faceVertexUvs[0].push([o[parseInt(g[7]) - 1], o[parseInt(g[11]) - 1], o[parseInt(g[15]) - 1]]), u += 4) : null !== (g = m.exec(T)) ? void 0 === g[10] ? (w.vertices.push(d[parseInt(g[2]) - 1], d[parseInt(g[5]) - 1], d[parseInt(g[8]) - 1]), w.faces.push(t(u++, u++, u++, [c[parseInt(g[3]) - 1], c[parseInt(g[6]) - 1], c[parseInt(g[9]) - 1]]))) : (w.vertices.push(d[parseInt(g[2]) - 1], d[parseInt(g[5]) - 1], d[parseInt(g[8]) - 1], d[parseInt(g[11]) - 1]), w.faces.push(t(u, u + 1, u + 3, [c[parseInt(g[3]) - 1], c[parseInt(g[6]) - 1], c[parseInt(g[12]) - 1]])), w.faces.push(t(u + 1, u + 2, u + 3, [c[parseInt(g[6]) - 1], c[parseInt(g[9]) - 1], c[parseInt(g[12]) - 1]])), u += 4) : /^o /.test(T) ? (w = new THREE.Geometry, r = new THREE.MeshLambertMaterial, (a = new THREE.Mesh(w, r)).name = T.substring(2).trim(), n.add(a), u = 0) : /^g /.test(T) || (/^usemtl /.test(T) ? r.name = T.substring(7).trim() : /^mtllib /.test(T) || /^s /.test(T)))
        }
        R = 0;
        for (var x = n.children.length; R < x; R++) {
            var w;
            (w = n.children[R].geometry).computeCentroids(), w.computeFaceNormals(), w.computeBoundingSphere()
        }
        return n
    }
};