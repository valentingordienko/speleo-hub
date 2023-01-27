import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PostAutomatOutline.svg';

export function PostAutomatOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="PostAutomatOutline">
      <SVG />
    </Icon>
  );
}
