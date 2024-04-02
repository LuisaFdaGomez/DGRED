var wms_layers = [];

var format_AvenidaTorrencial_0 = new ol.format.GeoJSON();
var features_AvenidaTorrencial_0 = format_AvenidaTorrencial_0.readFeatures(json_AvenidaTorrencial_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AvenidaTorrencial_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AvenidaTorrencial_0.addFeatures(features_AvenidaTorrencial_0);
var lyr_AvenidaTorrencial_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AvenidaTorrencial_0, 
                style: style_AvenidaTorrencial_0,
                popuplayertitle: "AvenidaTorrencial",
                interactive: true,
                title: '<img src="styles/legend/AvenidaTorrencial_0.png" /> AvenidaTorrencial'
            });
var format_AvenidaTorrencial_1 = new ol.format.GeoJSON();
var features_AvenidaTorrencial_1 = format_AvenidaTorrencial_1.readFeatures(json_AvenidaTorrencial_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AvenidaTorrencial_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AvenidaTorrencial_1.addFeatures(features_AvenidaTorrencial_1);
var lyr_AvenidaTorrencial_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AvenidaTorrencial_1, 
                style: style_AvenidaTorrencial_1,
                popuplayertitle: "AvenidaTorrencial",
                interactive: true,
                title: '<img src="styles/legend/AvenidaTorrencial_1.png" /> AvenidaTorrencial'
            });

lyr_AvenidaTorrencial_0.setVisible(true);lyr_AvenidaTorrencial_1.setVisible(true);
var layersList = [lyr_AvenidaTorrencial_0,lyr_AvenidaTorrencial_1];
lyr_AvenidaTorrencial_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODIGO': 'CODIGO', 'CATEGORIA': 'CATEGORIA', 'GRADO_AMEN': 'GRADO_AMEN', 'CATEGORIA_': 'CATEGORIA_', 'SUBCATEGOR': 'SUBCATEGOR', 'SHAPE__Are': 'SHAPE__Are', 'SHAPE__Len': 'SHAPE__Len', });
lyr_AvenidaTorrencial_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODIGO': 'CODIGO', 'CATEGORIA': 'CATEGORIA', 'GRADO_AMEN': 'GRADO_AMEN', 'CATEGORIA_': 'CATEGORIA_', 'SUBCATEGOR': 'SUBCATEGOR', 'SHAPE__Are': 'SHAPE__Are', 'SHAPE__Len': 'SHAPE__Len', });
lyr_AvenidaTorrencial_0.set('fieldImages', {'OBJECTID': '', 'CODIGO': '', 'CATEGORIA': '', 'GRADO_AMEN': '', 'CATEGORIA_': '', 'SUBCATEGOR': '', 'SHAPE__Are': '', 'SHAPE__Len': '', });
lyr_AvenidaTorrencial_1.set('fieldImages', {'OBJECTID': '', 'CODIGO': '', 'CATEGORIA': '', 'GRADO_AMEN': '', 'CATEGORIA_': '', 'SUBCATEGOR': '', 'SHAPE__Are': '', 'SHAPE__Len': '', });
lyr_AvenidaTorrencial_0.set('fieldLabels', {'OBJECTID': 'no label', 'CODIGO': 'no label', 'CATEGORIA': 'no label', 'GRADO_AMEN': 'no label', 'CATEGORIA_': 'no label', 'SUBCATEGOR': 'no label', 'SHAPE__Are': 'no label', 'SHAPE__Len': 'no label', });
lyr_AvenidaTorrencial_1.set('fieldLabels', {'OBJECTID': 'no label', 'CODIGO': 'no label', 'CATEGORIA': 'no label', 'GRADO_AMEN': 'no label', 'CATEGORIA_': 'no label', 'SUBCATEGOR': 'no label', 'SHAPE__Are': 'no label', 'SHAPE__Len': 'no label', });
lyr_AvenidaTorrencial_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});