import React from 'react';

import {Icon, TBaseProps} from '../../Icon'
import { ReactComponent as SVG } from '../svg/BookOutline.svg';

export function BookOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="BookOutline">
      <SVG />
    </Icon>
  );
}
