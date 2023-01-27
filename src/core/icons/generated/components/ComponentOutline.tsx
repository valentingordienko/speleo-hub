import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ComponentOutline.svg';

export function ComponentOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ComponentOutline">
      <SVG />
    </Icon>
  );
}
