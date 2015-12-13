function $http(url){
	var core = {
		ajax: function(method, url){

			var promise = new Promise(function (resolve, reject) {

				var xhr = new XMLHttpRequest();
				var uri = url;

				xhr.open(method, uri);
				xhr.send();

				xhr.onload = function () {
					if (this.status >= 200 && this.status < 300) {
						resolve(this.response);
					} else{
						reject(this.status);
					}
				};

				xhr.onerror = function () {
					reject(this.status);
				}
			})

			return promise;
		}
	}

	return {
		get: function () {
			return core.ajax('GET', url);
		}
	}
}

export default $http;
