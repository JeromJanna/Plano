var wms_layers = [];

var format_ZEE_Alto_AmazonasZonificacin_Ecolgica_Econmica_0 = new ol.format.GeoJSON();
var features_ZEE_Alto_AmazonasZonificacin_Ecolgica_Econmica_0 = format_ZEE_Alto_AmazonasZonificacin_Ecolgica_Econmica_0.readFeatures(json_ZEE_Alto_AmazonasZonificacin_Ecolgica_Econmica_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZEE_Alto_AmazonasZonificacin_Ecolgica_Econmica_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZEE_Alto_AmazonasZonificacin_Ecolgica_Econmica_0.addFeatures(features_ZEE_Alto_AmazonasZonificacin_Ecolgica_Econmica_0);
var lyr_ZEE_Alto_AmazonasZonificacin_Ecolgica_Econmica_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZEE_Alto_AmazonasZonificacin_Ecolgica_Econmica_0, 
                style: style_ZEE_Alto_AmazonasZonificacin_Ecolgica_Econmica_0,
                interactive: true,
    title: 'ZEE_Alto_Amazonas Zonificación_Ecológica_Económica<br />\
    <img src="styles/legend/ZEE_Alto_AmazonasZonificacin_Ecolgica_Econmica_0_0.png" /> Zona de protección y conservación ecológica<br />\
    <img src="styles/legend/ZEE_Alto_AmazonasZonificacin_Ecolgica_Econmica_0_1.png" /> Zona de vocación urbana e industrial<br />\
    <img src="styles/legend/ZEE_Alto_AmazonasZonificacin_Ecolgica_Econmica_0_2.png" /> Zona para producción agropecuaria<br />\
    <img src="styles/legend/ZEE_Alto_AmazonasZonificacin_Ecolgica_Econmica_0_3.png" /> Zona para producción forestal<br />\
    <img src="styles/legend/ZEE_Alto_AmazonasZonificacin_Ecolgica_Econmica_0_4.png" /> Zona para producción pesquera<br />\
    <img src="styles/legend/ZEE_Alto_AmazonasZonificacin_Ecolgica_Econmica_0_5.png" /> Zona para recuperación<br />\
    <img src="styles/legend/ZEE_Alto_AmazonasZonificacin_Ecolgica_Econmica_0_6.png" /> <br />'
        });

lyr_ZEE_Alto_AmazonasZonificacin_Ecolgica_Econmica_0.setVisible(true);
var layersList = [lyr_ZEE_Alto_AmazonasZonificacin_Ecolgica_Econmica_0];
lyr_ZEE_Alto_AmazonasZonificacin_Ecolgica_Econmica_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ZEECODE': 'ZEECODE', 'ZONAS_GRAN': 'ZONAS_GRAN', 'ZONAS': 'ZONAS', 'ZEE': 'ZEE', 'Hectares': 'Hectares', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_ZEE_Alto_AmazonasZonificacin_Ecolgica_Econmica_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'ZEECODE': 'Range', 'ZONAS_GRAN': 'TextEdit', 'ZONAS': 'TextEdit', 'ZEE': 'TextEdit', 'Hectares': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ZEE_Alto_AmazonasZonificacin_Ecolgica_Econmica_0.set('fieldLabels', {'OBJECTID': 'no label', 'ZEECODE': 'no label', 'ZONAS_GRAN': 'no label', 'ZONAS': 'no label', 'ZEE': 'no label', 'Hectares': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_ZEE_Alto_AmazonasZonificacin_Ecolgica_Econmica_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});