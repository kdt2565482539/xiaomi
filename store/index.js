import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var vuexObj={
	state:{
		address:""
	},
	mutations:{
		setaddress(state,payload){
			Vue.set(state,"address",payload)
		}
	},
	getters:{},
	actions:{},
	modules:{}
}

var store=new Vuex.Store(vuexObj);

export default store;