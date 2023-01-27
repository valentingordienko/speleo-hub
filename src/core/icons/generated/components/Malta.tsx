import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Malta.svg';

export function Malta(props: TBaseProps) {
  return (
    <Icon {...props} name="Malta">
      <SVG />
    </Icon>
  );
}
