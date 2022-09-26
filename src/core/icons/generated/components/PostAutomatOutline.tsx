import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PostAutomatOutline.svg';

export function PostAutomatOutline(props: TProps) {
  return (
    <Icon {...props} name="PostAutomatOutline">
      <SVG />
    </Icon>
  );
}
