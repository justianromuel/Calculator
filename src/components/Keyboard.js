import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

import { Styles } from '../styles/Styles'

export default Keyboard = () => {

    const [numRes, setNumRes] = React.useState(0)

    const handleNumber = (value) => {
        if (value == "%") {
            setNumRes((numRes / 100));
            return;
        }
        if (value == "+/-") {
            setNumRes((numRes * -1));
            return;
        }
        if (value == "(" && numRes == 0) {
            return setNumRes("(")
        }

        if (numRes == 0) {
            return setNumRes(numRes + value)
        } else {
            return setNumRes(numRes + '' + value)
        }
    }

    const allClear = () => {
        setNumRes(0)
    }

    const clearEntry = () => {
        if (numRes.length > 0) {
            return setNumRes(numRes.slice(0, -1))
        } else {
            return setNumRes(0)
        }
    }

    const result = () => {
        let total = eval(numRes)
        return setNumRes(total)
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#171717' }}>
            <View style={{ flex: 1 }}>
                <Text style={Styles.inputResult}>{numRes}</Text>
            </View>

            <View>
                <View style={Styles.btnRow}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => allClear()}>
                        <Text style={Styles.btnRed}>AC</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1 }}>
                        <Text style={Styles.btnGreen} onPress={() => clearEntry()}>CE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => handleNumber('%')}>
                        <Text style={Styles.btnGreen}>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => handleNumber('/')}>
                        <Text style={Styles.btnGreen}>÷</Text>
                    </TouchableOpacity>
                </View>

                <View style={Styles.btnRow}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => handleNumber(7)}>
                        <Text style={Styles.btnWhite}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => handleNumber(8)}>
                        <Text style={Styles.btnWhite}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => handleNumber(9)}>
                        <Text style={Styles.btnWhite}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => handleNumber('*')}>
                        <Text style={Styles.btnGreen}>x</Text>
                    </TouchableOpacity>
                </View>

                <View style={Styles.btnRow}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => handleNumber(4)}>
                        <Text style={Styles.btnWhite}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => handleNumber(5)}>
                        <Text style={Styles.btnWhite}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => handleNumber(6)}>
                        <Text style={Styles.btnWhite}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => handleNumber('+')}>
                        <Text style={Styles.btnGreen}>+</Text>
                    </TouchableOpacity>
                </View>

                <View style={Styles.btnRow}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => handleNumber(1)}>
                        <Text style={Styles.btnWhite}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => handleNumber(2)}>
                        <Text style={Styles.btnWhite}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => handleNumber(3)}>
                        <Text style={Styles.btnWhite}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => handleNumber('-')}>
                        <Text style={Styles.btnGreen}>-</Text>
                    </TouchableOpacity>
                </View>

                <View style={Styles.btnRow}>
                    <TouchableOpacity style={{ flex: 2 }} onPress={() => handleNumber(0)}>
                        <Text style={Styles.btnWhite}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => handleNumber('.')}>
                        <Text style={Styles.btnWhite}>.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => handleNumber('+/-')}>
                        <Text style={Styles.btnGreen}>±</Text>
                    </TouchableOpacity>
                </View>

                <View style={Styles.btnRow}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => handleNumber('(')}>
                        <Text style={Styles.btnWhite}>(</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => handleNumber(')')}>
                        <Text style={Styles.btnWhite}>)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 2 }} onPress={() => result()}>
                        <Text style={Styles.btnEqual}>=</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}