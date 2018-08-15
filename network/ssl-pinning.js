setImmediate(function() {
	Java.perform(function() {

		var trustManagerExtensions = Java.use("android.net.http.X509TrustManagerExtensions");

		trustManagerExtensions.checkServerTrusted.overload('java.lang.Object', 'java.lang.String', 'java.lang.String').implementation = function (var0, var1, var2) {
			console.log("[*] X509TrustManagerExtensions.checkServerTrusted called for host: " + var2 +"\n");
			return this.checkServerTrusted(var0, var1, var2);
		};
	});
});