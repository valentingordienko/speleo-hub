import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Kenya.svg';

export function Kenya(props: TBaseProps) {
  return (
    <Icon {...props} name="Kenya">
      <SVG />
    </Icon>
  );
}
