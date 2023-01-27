import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CommitsOutline.svg';

export function CommitsOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="CommitsOutline">
      <SVG />
    </Icon>
  );
}
