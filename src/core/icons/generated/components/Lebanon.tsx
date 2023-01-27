import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Lebanon.svg';

export function Lebanon(props: TBaseProps) {
  return (
    <Icon {...props} name="Lebanon">
      <SVG />
    </Icon>
  );
}
