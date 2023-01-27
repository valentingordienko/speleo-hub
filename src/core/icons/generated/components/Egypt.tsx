import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Egypt.svg';

export function Egypt(props: TBaseProps) {
  return (
    <Icon {...props} name="Egypt">
      <SVG />
    </Icon>
  );
}
