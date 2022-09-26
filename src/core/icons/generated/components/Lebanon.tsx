import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Lebanon.svg';

export function Lebanon(props: TProps) {
  return (
    <Icon {...props} name="Lebanon">
      <SVG />
    </Icon>
  );
}
