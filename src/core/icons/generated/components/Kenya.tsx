import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Kenya.svg';

export function Kenya(props: TProps) {
  return (
    <Icon {...props} name="Kenya">
      <SVG />
    </Icon>
  );
}
