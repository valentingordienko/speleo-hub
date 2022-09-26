import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CommitsOutline.svg';

export function CommitsOutline(props: TProps) {
  return (
    <Icon {...props} name="CommitsOutline">
      <SVG />
    </Icon>
  );
}
