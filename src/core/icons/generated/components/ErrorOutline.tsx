import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ErrorOutline.svg';

export function ErrorOutline(props: TProps) {
  return (
    <Icon {...props} name="ErrorOutline">
      <SVG />
    </Icon>
  );
}
