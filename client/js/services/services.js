(function(){ 'use strict';
    var module = angular.module("dribbble", ['ngResource']);

    module.factory('TokenHandler', function() {
      var tokenHandler = {};
      var token = "8fd109d510e08db5fd5d56fd2ad1102c5b0f3acc8d3bbb58bbe647f2c26fed67";

      tokenHandler.set = function( newToken ) {
        token = newToken;
      };

      tokenHandler.get = function() {
        return token;
      };

      // wrap given actions of a resource to send auth token with every
      // request
      tokenHandler.wrapActions = function( resource, actions ) {
        // copy original resource
        var wrappedResource = resource;
        for (var i=0; i < actions.length; i++) {
          tokenWrapper( wrappedResource, actions[i] );
        };
        // return modified copy of resource
        return wrappedResource;
      };
      // wraps resource action to send request with auth token
      var tokenWrapper = function( resource, action ) {
        // copy original action
        resource['_' + action]  = resource[action];
        // create new action wrapping the original and sending token
        resource[action] = function( data, success, error){
          return resource['_' + action](
            angular.extend({}, data || {}, {access_token: tokenHandler.get()}),
            success,
            error
          );
        };
      };

      return tokenHandler;
    });

    /**
     * Shots Model
     * @param  {Object} 'Shots'
     * @param  {Object} TokenHandler Service of Token
     * @return {Object}
     */
    module.factory('Shots',function($resource,TokenHandler){
        return $resource('https://api.dribbble.com/v1/shots/:id',{access_token:TokenHandler.get()},{
            fetchAll:{ method:'GET', params:{id:'@id'}, isArray:true },
            fetchById:{ method:'GET', params:{id:'@id'} }
        });
    });

}());
