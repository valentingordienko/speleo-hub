import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Iran.svg';

export function Iran(props: TProps) {
  return (
    <Icon {...props} name="Iran">
      <SVG />
    </Icon>
  );
}
