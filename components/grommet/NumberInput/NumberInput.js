import React, { Component } from 'react';
import { Add, Subtract } from 'grommet-icons';
import {
  createNumberMask, MaskedInput, maskedNumberValue,
  createMinMaxInputPipe,
} from '../MaskedInput';
import doc from './doc';


class NumberInput extends Component {
  static defaultProps = {
    emptyValue: '',
    step: 1,
    addIcon: <Add />,
    subtractIcon: <Subtract />,
    prefix: '',
    suffix: '',
    thousandsSeparatorSymbol: '',
    decimalSymbol: '.',
    decimalLimit: 2,
    integerLimit: null,
    updateToString: false,
    a11yIncrement: 'Increment by',
    a11yDecrement: 'Decrement by',

  }

  valueToNumber = (value) => {
    const {
      prefix, suffix, thousandsSeparatorSymbol, decimalSymbol,
    } = this.props;
    return maskedNumberValue({
      value, prefix, suffix, thousandsSeparatorSymbol, decimalSymbol,
    });
  }

  addStep = () => {
    const {
      max, min, step, value,
    } = this.props;
    let val = this.valueToNumber(value) + step;
    if (Number.isNaN(val)) {
      if (min !== undefined) {
        val = min;
      } else {
        val = undefined;
      }
    } else if (max !== undefined) {
      val = Math.min(val, max);
    }
    this.upDateValue(val);
  }

  subtractStep = () => {
    const { min, step, value } = this.props;
    let val = this.valueToNumber(value) - step;
    if (Number.isNaN(val)) {
      if (min !== undefined) {
        val = min;
      } else {
        val = undefined;
      }
    } else if (min !== undefined) {
      val = Math.max(val, min);
    }
    this.upDateValue(val);
  }

  onChange = (e) => {
    const { onChange, updateToString, emptyValue } = this.props;
    if (onChange) {
      let value = updateToString ? e.target.value : this.valueToNumber(e.target.value);
      if (this.value !== value) {
        if (value === undefined) {
          value = emptyValue;
        }
        this.value = value;
        onChange({ ...e, target: { ...e.target, value } });
      }
    }
  };

  render() {
    const {
      onChange, min, max, step, pipe: userPipe, updateToString,
      prefix, suffix, thousandsSeparatorSymbol,
      decimalSymbol, decimalLimit, integerLimit,
      a11yIncrement, a11yDecrement,
      mask: userMask, addIcon, subtractIcon, disabled, ...rest
    } = this.props;
    const allowNegative = typeof min !== 'number' || min < 0;
    const includeThousandsSeparator = !!thousandsSeparatorSymbol;
    const allowDecimal = typeof decimalLimit === 'number' && decimalLimit > 0;
    const mask = userMask || createNumberMask({
      prefix,
      suffix,
      includeThousandsSeparator,
      thousandsSeparatorSymbol,
      allowDecimal,
      decimalSymbol,
      decimalLimit,
      integerLimit,
      allowNegative,
    });
    const pipe = userPipe || createMinMaxInputPipe({
      mask, prefix, suffix, thousandsSeparatorSymbol, decimalSymbol, min, max, ...rest,
    });
    return (
      <MaskedInput
        update={(update) => { this.upDateValue = update; }}
        pattern='[0-9]*'
        inputMode='numeric'
        onKeyDown={this.subtractStep}
        onKeyUp={this.addStep}
        disabled={disabled}
        onChange={this.onChange}
        pipe={pipe}
        mask={mask}
        widgets={[
          {
            'icon': addIcon,
            'onClick': disabled ? undefined : this.addStep,
            'aria-label': `${a11yIncrement} ${step}`,
          },
          {
            'icon': subtractIcon,
            'onClick': disabled ? undefined : this.subtractStep,
            'aria-label': `${a11yDecrement} ${step}`,
          },

        ]}
        {...rest}
      />
    );
  }
}

if (process.env.NODE_ENV !== 'production') {
  doc(NumberInput);
}

export default NumberInput;