import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ErrorOutline.svg';

export function ErrorOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ErrorOutline">
      <SVG />
    </Icon>
  );
}
