import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Iran.svg';

export function Iran(props: TBaseProps) {
  return (
    <Icon {...props} name="Iran">
      <SVG />
    </Icon>
  );
}
