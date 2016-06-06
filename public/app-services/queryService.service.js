(function() {
	angular.module('arrowApp').factory('QueryService', QueryService);
	QueryService.$inject = [ '$http', '$location', 'Upload' ];

	function QueryService($http, $location, Upload) {
		var service = {};
		service.BrandNameSearchQuery = BrandNameSearchQuery;
		service.ModelNameSearchQuery = ModelNameSearchQuery;
		service.ProductImage1UploadQuery = ProductImage1UploadQuery;
		service.ProductImage2UploadQuery = ProductImage2UploadQuery;
		service.ProductImage3UploadQuery = ProductImage3UploadQuery;
		service.ProductInvoiceUploadQuery = ProductInvoiceUploadQuery;
		service.UploadProductTextDetails = UploadProductTextDetails;
		return service;
		function BrandNameSearchQuery(productType) {
			var request = $http({
				method : "get",
				url : "/arrow/searchbrand",
				params : {
					productType : productType
				}
			});
			return request.then(handleSuccess, handleError('Faliure'));
		}
		function ModelNameSearchQuery(brandName) {
			var request = $http({
				method : "get",
				url : "/arrow/searchmodel",
				params : {
					brandName : brandName
				}
			});
			return request.then(handleSuccess, handleError('Faliure'));
		}
		function ProductImage1UploadQuery(productImage1) {
			var request = Upload.upload({
				url : '/arrow/productimage1upload',
				fields : {
					'username' : 'productImage1'
				},
				data : {
					base64 : productImage1.base64,
					fileName : productImage1.filename,
					fileSize : productImage1.filesize,
					fileType : productImage1.filetype
				}
			}).then(handleSuccess, handleError('Faliure'));
			return request.then(handleSuccess, handleError('Faliure'));
		}
		function ProductImage2UploadQuery(productImage2) {
			var request = Upload.upload({
				url : '/arrow/productimage2upload',
				fields : {
					'username' : 'productImage2'
				},
				data : {
					base64 : productImage2.base64,
					fileName : productImage2.filename,
					fileSize : productImage2.filesize,
					fileType : productImage2.filetype
				}
			}).then(handleSuccess, handleError('Faliure'));
			return request.then(handleSuccess, handleError('Faliure'));
		}
		function ProductImage3UploadQuery(productImage3) {
			var request = Upload.upload({
				url : '/arrow/productimage3upload',
				fields : {
					'username' : 'productImage3'
				},
				data : {
					base64 : productImage3.base64,
					fileName : productImage3.filename,
					fileSize : productImage3.filesize,
					fileType : productImage3.filetype
				}
			}).then(handleSuccess, handleError('Faliure'));
			return request.then(handleSuccess, handleError('Faliure'));
		}
		function ProductInvoiceUploadQuery(invoiceFileType) {
			var request = Upload.upload({
				url : '/arrow/productinvoiceupload',
				fields : {
					'username' : 'zouroto'
				},
				data : {
					base64 : invoiceFileType.base64,
					fileName : invoiceFileType.filename,
					fileSize : invoiceFileType.filesize,
					fileType : invoiceFileType.filetype
				}
			}).then(handleSuccess, handleError('Faliure'));
			return request.then(handleSuccess, handleError('Faliure'));
		}
		function UploadProductTextDetails(productDescription) {
			var request = $http({
				method : "post",
				url : "/arrow/productdescription",
				data : {
					productDescription : productDescription
				}
			});
			return request.then(handleSuccess, handleError('Faliure'));
		}
		function handleSuccess(data) {
			product = data.data;
			return product;
		}
		function handleError(error) {
			return function() {
				return {
					success: false
				}
				;
			};
		}
	}
})();