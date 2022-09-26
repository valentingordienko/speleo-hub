import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Macedonia.svg';

export function Macedonia(props: TProps) {
  return (
    <Icon {...props} name="Macedonia">
      <SVG />
    </Icon>
  );
}
