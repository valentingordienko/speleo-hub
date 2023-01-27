import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Tanzania.svg';

export function Tanzania(props: TBaseProps) {
  return (
    <Icon {...props} name="Tanzania">
      <SVG />
    </Icon>
  );
}
