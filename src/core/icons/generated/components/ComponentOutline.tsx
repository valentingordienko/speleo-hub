import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ComponentOutline.svg';

export function ComponentOutline(props: TProps) {
  return (
    <Icon {...props} name="ComponentOutline">
      <SVG />
    </Icon>
  );
}
