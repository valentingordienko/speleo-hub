import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MaleOutline.svg';

export function MaleOutline(props: TProps) {
  return (
    <Icon {...props} name="MaleOutline">
      <SVG />
    </Icon>
  );
}
