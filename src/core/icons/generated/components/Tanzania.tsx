import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Tanzania.svg';

export function Tanzania(props: TProps) {
  return (
    <Icon {...props} name="Tanzania">
      <SVG />
    </Icon>
  );
}
