import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Small500.svg';

export function Small500(props: TProps) {
  return (
    <Icon {...props} name="Small500">
      <SVG />
    </Icon>
  );
}
