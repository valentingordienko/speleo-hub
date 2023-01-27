import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Denmark.svg';

export function Denmark(props: TBaseProps) {
  return (
    <Icon {...props} name="Denmark">
      <SVG />
    </Icon>
  );
}
