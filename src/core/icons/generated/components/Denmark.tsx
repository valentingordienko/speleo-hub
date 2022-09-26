import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Denmark.svg';

export function Denmark(props: TProps) {
  return (
    <Icon {...props} name="Denmark">
      <SVG />
    </Icon>
  );
}
