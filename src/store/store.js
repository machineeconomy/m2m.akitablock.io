import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        robot1_balance: 0,
        robot2_balance: 0,
        provider1_balance: 0,
        provider2_balance: 0,
    },
    mutations: {
        IncreaseBalanceRobot1(state, amount) {
            state.robot1_balance = state.robot1_balance + amount
        },
        IncreaseBalanceRobot2(state, amount) {
            state.robot2_balance = state.robot2_balance + amount
        },
        IncreaseBalanceProvider1(state, amount) {
            state.provider1_balance = state.provider1_balance + amount
        },
        IncreaseBalanceProvider2(state, amount) {
            state.provider2_balance = state.provider2_balance + amount
        },
    },
    getters: {
        robot1_balance: state => state.robot1_balance,
        robot2_balance: state => state.robot2_balance,
        provider1_balance: state => state.provider1_balance,
        provider2_balance: state => state.provider2_balance
    }
})