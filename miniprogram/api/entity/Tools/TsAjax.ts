
interface Config {
    type: string;
    url: string;
    data?: any;
    dataType: string;
}

export class TsAjax {

    public static ajax(config: Config) {
        var xhr = new XMLHttpRequest();

        
        xhr.open(config.type, config.url);

        xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");       
     
        // xhr.setRequestHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
        xhr.send(config.data);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                if (config.dataType === 'json') {
                } else {
                }
            }
        }
    }
}



