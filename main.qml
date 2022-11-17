import QtQuick 2.12
import QtQuick.Window 2.12
import QtQuick.Controls 2.12
import "main.js" as MyJs
import "secret.js" as Secret
Window {
    id: main_window
    visible: true
    width: 640
    height: 480
    title: qsTr("Домашняя работа №6")

    property string key: Secret.API_KEY
    property string city: ""

    property variant param: MyJs.getParam();

    ComboBox {
        id: combo
        width: parent.width
        model: MyJs.getCities()
        onActivated: changed()
        Component.onCompleted: changed()
    }

    Row {
        anchors.top: combo.bottom
        anchors.topMargin: 10
        spacing:    5
        Canvas {
            id: canvas
            width:  120
            height: 120

        }
        Column {
            spacing:    5
            Text {text: param.city_name}
            Text {text: param.timezone}
            Text {text: param.sunrise}
            Text {text: param.sunset}
            Text {text: param.ob_time}
            Text {text: param.weather}
            Text {text: param.temp}
            Text {text: param.app_temp}
            Text {text: param.pres}
            Text {text: param.rh}
            Text {text: param.clouds}
            Text {text: param.wind_cdir_full}
            Text {text: param.wind_spd}
        }
    }
    function changed() {
        city = combo.currentText;
        MyJs.setWeather(main_window);
    }
}
