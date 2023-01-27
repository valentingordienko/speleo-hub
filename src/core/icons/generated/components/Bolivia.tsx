import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Bolivia.svg';

export function Bolivia(props: TBaseProps) {
  return (
    <Icon {...props} name="Bolivia">
      <SVG />
    </Icon>
  );
}
