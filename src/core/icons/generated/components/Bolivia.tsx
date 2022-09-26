import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Bolivia.svg';

export function Bolivia(props: TProps) {
  return (
    <Icon {...props} name="Bolivia">
      <SVG />
    </Icon>
  );
}
